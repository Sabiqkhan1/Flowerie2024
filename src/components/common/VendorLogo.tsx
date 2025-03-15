import React from 'react'
import { ReactComponent as RedMesh } from '../../assets/images/icons/Mesh_Red.svg'
const VendorLogo = () => {
    return (
        <div>
            <div className="flex flex-col w-max mx-auto">
                <div className="flex items-center">
                    <RedMesh style={{ width: 28, height: 28 }} />
                    <span className="font-semibold text-light-maroon text-xl">
                        Flowerie
                    </span>
                </div>
                <span className="font-semibold text-sm text-black mt-[-0.7rem] text-right">
                    VENDOR
                </span>
            </div>
        </div>
    )
}

export default VendorLogo
