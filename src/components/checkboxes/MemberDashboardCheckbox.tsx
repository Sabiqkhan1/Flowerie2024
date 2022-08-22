import React from 'react'
import FormControlLabel, {
    FormControlLabelProps,
} from '@mui/material/FormControlLabel'

const MemberDashboardCheckbox: React.FunctionComponent<
    FormControlLabelProps
> = ({ label, control }): JSX.Element => {
    return (
        <FormControlLabel
            sx={{ width: '10rem' }}
            control={control}
            componentsProps={{
                typography: {
                    fontFamily: 'medium',
                    fontSize: 12,
                    color: '#2E2E48',
                },
            }}
            label={label}
        />
    )
}

export default MemberDashboardCheckbox
