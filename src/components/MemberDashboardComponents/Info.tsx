import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import MemberDashboardInput from '../inputs/MemberDashboardInput'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import { weddingSupplies } from '../../assets/data/static/weddingSupplies'
import MemberDashboardCheckbox from '../checkboxes/MemberDashboardCheckbox'
import CustomCheckBox from '../checkboxes/CustomCheckBox'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
const Info: React.FunctionComponent = (): JSX.Element => {
    const [supplyIds, setSupplyIds] = useState<Array<number>>([])
    const navigate = useNavigate()

    const handleSupplySelection = (id: number) => {
        let newSupplyIds: Array<number> = [...supplyIds]
        if (newSupplyIds.some((i: number) => i === id)) {
            newSupplyIds = newSupplyIds.filter((i: number) => i !== id)
        } else {
            newSupplyIds.push(id)
        }
        setSupplyIds(newSupplyIds)
    }

    const isChecked = (id: number): boolean => {
        return supplyIds.includes(id)
    }

    const handleSubmit = (event: any) => {
        event.preventDefault()
        navigate('planner/wedding')
    }

    return (
        <section className="w-full min-h-[calc(100vh-96px)] bg-gray p-8 flex items-center justify-center">
            <div className="w-4/5 bg-white shadow-xl">
                <Grid container>
                    <Grid item lg={3}>
                        <section className="h-full bg-[#F1E2DB] px-4 py-6">
                            <h4 className="font-medium text-xl">
                                One More Thing!
                            </h4>
                            <p className="font-light text-textBlack text-xs max-w-[10rem] mt-2">
                                Update your planner with infomation about your
                                wedding
                            </p>
                        </section>
                    </Grid>
                    <Grid item lg={9}>
                        <Box
                            component="form"
                            sx={{ p: 4 }}
                            noValidate
                            autoComplete="off"
                            onSubmit={handleSubmit}
                        >
                            <Box>
                                <h4 className="font-medium text-textBlack text-xl mb-2">
                                    Our Story
                                </h4>
                                <Grid container spacing={4}>
                                    <Grid item lg={6}>
                                        <MemberDashboardInput label="I am" />
                                    </Grid>
                                    <Grid item lg={6}>
                                        <MemberDashboardInput label="My Partner Is" />
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box sx={{ my: 6 }}>
                                <h4 className="font-medium text-textBlack text-xl mb-2">
                                    Wedding Details
                                </h4>
                                <Grid container spacing={4}>
                                    <Grid item lg={4}>
                                        <MemberDashboardInput label="Wedding date" />
                                    </Grid>
                                    <Grid item lg={4}>
                                        <MemberDashboardInput label="Guests no" />
                                    </Grid>
                                    <Grid item lg={4}>
                                        <MemberDashboardInput label="Town/City" />
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box>
                                <h4 className="font-medium text-textBlack text-xl mb-2">
                                    Which Wedding Suppliers Do You Still Need To
                                    Get?
                                </h4>
                                <Box sx={{ display: 'flex' }}>
                                    <FormControl
                                        sx={{ m: 3 }}
                                        component="fieldset"
                                        variant="standard"
                                        fullWidth
                                    >
                                        <FormGroup row={true}>
                                            {weddingSupplies.map(
                                                (supply, index: number) => (
                                                    <MemberDashboardCheckbox
                                                        key={index}
                                                        label={supply.label}
                                                        control={
                                                            <CustomCheckBox
                                                                onClick={() =>
                                                                    handleSupplySelection(
                                                                        index
                                                                    )
                                                                }
                                                                checked={isChecked(
                                                                    index
                                                                )}
                                                            />
                                                        }
                                                    />
                                                )
                                            )}
                                        </FormGroup>
                                    </FormControl>
                                </Box>
                            </Box>
                            <Box sx={{ textAlign: 'right' }}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        bgcolor: '#DF7E7E',
                                        fontFamily: 'regular',
                                        fontSize: 14,
                                        color: '#fff',
                                        py: 1,
                                        px: 2,
                                        borderRadius: '20px',
                                        boxShadow:
                                            '0px 4px 4px 0px rgba(0,0,0,0.3)',
                                        '&:hover': {
                                            backgroundColor: '#C86E6E',
                                        },
                                    }}
                                    type="submit"
                                >
                                    Save
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </section>
    )
}

export default Info
