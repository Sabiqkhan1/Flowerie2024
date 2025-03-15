import React from 'react';
import FilterButton from '../buttons/FilterButton';
import AddIcon from '@mui/icons-material/Add';
import FilterDropDown from '../popovers/FilterDropDown';
import FilterTag from '../chips/FilterTag';
import { FilterTagType } from '../../assets/data/types';

interface FilterSectionProps {
    anchorEl: HTMLButtonElement | null;
    handleDropDownOpen: (event: React.MouseEvent<HTMLButtonElement | null>) => void;
    handleDropDownClose: () => void;
    dropDownOpen: boolean;
    filterTags: FilterTagType[];
    handleFilterSelect: (tag: FilterTagType) => void;
    id?: string; // Make id optional
}

const FilterSection: React.FC<FilterSectionProps> = ({
    anchorEl,
    handleDropDownOpen,
    handleDropDownClose,
    dropDownOpen,
    filterTags,
    handleFilterSelect,
    id,
}) => {
    return (
        <div className="flex w-full xs:flex-col">
            <FilterButton id="tag" onClick={handleDropDownOpen} aria-describedby={id}>
                <div className="flex items-center">
                    Add Filters
                    <AddIcon sx={{ fontSize: { sm: 16 }, ml: 1 }} />
                </div>
            </FilterButton>
            <FilterDropDown
                id={id}
                open={dropDownOpen}
                anchorEl={anchorEl}
                handleClose={handleDropDownClose}
                tagList={filterTags}
                handleChange={handleFilterSelect}
            />
            <div className="ml-6 flex flex-wrap xs:flex-nowrap xs:overflow-auto xs:pt-2 xs:ml-0">
                {filterTags.map((tag, index) => (
                    <FilterTag key={index} tag={tag} handleDelete={handleFilterSelect} />
                ))}
            </div>
        </div>
    );
};

export default FilterSection;
