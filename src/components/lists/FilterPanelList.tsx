import React, { Fragment, useState } from 'react'
import { checkListCategories } from '../../assets/data/static/checkListCategories'
import { dateFilters } from '../../assets/data/static/dateFilters'
import { FilterTagType } from '../../assets/data/types'
import FilterTag from '../chips/FilterTag'
import CheckListRadio from '../radios/CheckListRadio'
import Button from '@mui/material/Button'

const FilterPanelList = () => {
    const [filterTags, setFilterTags] = useState<Array<FilterTagType>>([
        {
            id: 0,
            label: 'To Do',
            value: 'to_do',
        },
        {
            id: 1,
            label: 'Done',
            value: 'done',
        },
    ])
    const [dateFilterId, setDateFilterId] = useState<number>(0)
    const [categoryFilterId, setCategoryFilterId] = useState<number>(0)

    const handleFilterSelect = (tag: FilterTagType) => {
        let newFilterTags = [...filterTags]
        if (newFilterTags.some((t) => t.id === tag.id)) {
            newFilterTags = newFilterTags.filter((t) => t.id !== tag.id)
        } else {
            newFilterTags.push(tag)
        }
        setFilterTags(newFilterTags)
    }

    const handleDateFilterSelect = (id: number) => {
        return () => setDateFilterId(id)
    }

    const handleCategoryFilterSelect = (id: number) => {
        return () => setCategoryFilterId(id)
    }
    return (
        <div className=" ">
            <h4 className="font-semibold text-2xl">Checklist</h4>
            <div className="my-4">
                <h5 className="font-semibold">RESULTS</h5>
                <div className="mt-2 flex flex-wrap">
                    {filterTags.length < 1 && (
                        <p className="font-light text-sm text-textBlack">
                            No filters
                        </p>
                    )}
                    {filterTags.map((tag, index) => (
                        <FilterTag
                            tag={tag}
                            key={index}
                            handleDelete={handleFilterSelect}
                        />
                    ))}
                </div>
            </div>
            <div className="my-8">
                <h5 className="font-semibold">STATUS</h5>
                <ul className="mt-2 ml-2">
                    <CheckListRadio
                        radioColor={
                            filterTags.find((f) => f.id === 0)
                                ? 'orange'
                                : '#c4c4c4'
                        }
                        label="To do"
                        handleClick={() =>
                            handleFilterSelect({
                                id: 0,
                                label: 'To Do',
                                value: 'to_do',
                            })
                        }
                    />
                    <CheckListRadio
                        radioColor={
                            filterTags.find((f) => f.id === 1)
                                ? 'green'
                                : '#c4c4c4'
                        }
                        label="Done"
                        style={{ marginTop: 8 }}
                        handleClick={() =>
                            handleFilterSelect({
                                id: 1,
                                label: 'Done',
                                value: 'done',
                            })
                        }
                    />
                </ul>
            </div>
            <div className="my-8">
                <h5 className="font-semibold">BY DATE</h5>
                <ul className="w-max mt-2 ml-2 flex flex-col">
                    {dateFilters.map((filter, index) => (
                        <Fragment key={index}>
                            <CheckListRadio
                                radioColor={
                                    index === dateFilterId ? 'green' : '#c4c4c4'
                                }
                                label={filter.label}
                                handleClick={handleDateFilterSelect(index)}
                            />
                            {index < dateFilters.length - 1 && (
                                <hr className="w-[1px] h-3 border-l border-l-black ml-[5.4px] " />
                            )}
                        </Fragment>
                    ))}
                </ul>
            </div>
            <div className="my-8">
                <h5 className="font-semibold">BY CATEGORY</h5>
                <ul className="w-max mt-2 ml-2 flex flex-col">
                    {checkListCategories.map((category, index) => (
                        <Button
                            key={index}
                            variant="text"
                            sx={{
                                color: '#2E2E48',
                                fontFamily:
                                    index === categoryFilterId
                                        ? 'semibold'
                                        : 'regular',
                                fontSize: 12,
                                display: 'block',
                                my: '2px',
                                p: 0,
                                textAlign: 'initial',
                                textTransform: 'none',
                                '&:hover': {
                                    bgcolor: 'transparent',
                                    fontFamily: 'semibold',
                                },
                            }}
                            onClick={handleCategoryFilterSelect(index)}
                        >
                            {category.label}
                        </Button>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FilterPanelList
