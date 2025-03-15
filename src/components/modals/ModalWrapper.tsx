import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import { closeLoginModal, closeSignupModal } from '../../redux/modals/modalSlice';

export const ModalWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const dispatch = useDispatch();
    const { loginOpen, signupOpen } = useSelector((state: RootState) => state.modals);

    return (
        <>
            <LoginModal 
                isOpen={loginOpen}
                onClose={() => dispatch(closeLoginModal())}
                onSuccess={() => dispatch(closeLoginModal())}
            />
            <SignupModal 
                isOpen={signupOpen}
                onClose={() => dispatch(closeSignupModal())}
                onSuccess={() => dispatch(closeSignupModal())}
            />
            {children}
        </>
    );
}; 