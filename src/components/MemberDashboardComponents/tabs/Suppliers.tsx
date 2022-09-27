import React from 'react'
import MobileStepper from '@mui/material/MobileStepper'
import Button from '@mui/material/Button'
import { linearProgressClasses } from '@mui/material/LinearProgress'
import SupplierRadio from '../../radios/SupplierRadio'
import Grid from '@mui/material/Grid'
import { suppliers } from '../../../assets/data/static/suppliers'
const Suppliers = () => {
    return (
        <div className="p-12 xs:p-8">
            <div className="text-right">
                <SupplierRadio />
            </div>
            <h1 className="font-semibold text-4xl">Supplier Manager</h1>
            <section className="my-4">
                <p className="font-medium text-textBlack text-xs">
                    You have hired <strong>2</strong> out of <strong>13</strong>{' '}
                    suppliers
                </p>
                <div className="w-1/4 my-2">
                    <MobileStepper
                        variant="progress"
                        steps={13}
                        position="static"
                        activeStep={2}
                        sx={{
                            maxWidth: '100%',
                            flexGrow: 1,
                            bgcolor: 'transparent',
                            p: 0,
                        }}
                        nextButton={<></>}
                        backButton={<></>}
                        LinearProgressProps={{
                            sx: {
                                height: 24,
                                width: '100%',
                                borderRadius: 3,
                                border: '2px solid #c4c4c4',
                                [`&.${linearProgressClasses.colorPrimary}`]: {
                                    backgroundColor: '#fff',
                                },
                                [`& .${linearProgressClasses.bar}`]: {
                                    borderRadius: 5,
                                    backgroundColor: '#DF7E74',
                                },
                            },
                        }}
                    />
                </div>
            </section>
            <Grid container spacing={{ lg: 8, md: 4, sm: 2, xs: 2 }}>
                {suppliers.map((supply, index) => (
                    <Grid key={index} item lg={3} md={3} sm={4} xs={6}>
                        <Button
                            sx={{
                                width: '100%',

                                aspectRatio: '280/280',
                                bgcolor: '#E6E6E6',
                                borderRadius: '20px',
                                textTransform: 'none',
                                '&:hover': {
                                    bgcolor: '#D6D6D6',
                                },
                            }}
                            className="flex flex-col items-center justify-center"
                        >
                            {supply.icon}
                            <h4 className="font-medium text-2xl text-textBlack mt-4 md:text-xl sm:text-xl sm:font-normal xs:text-sm">
                                {supply.label}
                            </h4>
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Suppliers
