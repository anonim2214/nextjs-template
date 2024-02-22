'use client';
import { connect } from 'react-redux';
import React, { ReactElement } from 'react';
import PopupType from '@/redux/popup/types';
import { closePopup, openPopup } from '@/redux/popup/actions';
import { RootState } from '@/redux/store';

interface PopupManagementProps {
}

interface PopupManagementReduxProps {
    currentPopup;
}

interface PopupManagementReduxFunctions {
    closePopup: typeof closePopup;
    openPopup: typeof openPopup;
}

function PopupManagement({
    currentPopup, closePopup, serverSideProps,
}: PopupManagementProps & PopupManagementReduxProps & PopupManagementReduxFunctions): ReactElement | null {

    if (currentPopup) {
        switch (currentPopup.type) {
            // case PopupType.CREATE_NEW_SCHEME: {
            //     return (
            //         <CreateNewSchemePopup serverSideProps={serverSideProps} close={closePopup.bind(this, PopupType.CREATE_NEW_SCHEME)} {...currentPopup.data} />
            //     );
            // }
        }
    }
    return null;
}

const mapStateToProps = (state: RootState): PopupManagementReduxProps => ({ currentPopup: state.popup.currentPopup });

const mapDispatchToProps: PopupManagementReduxFunctions = { closePopup, openPopup };

export default connect<PopupManagementReduxProps, PopupManagementReduxFunctions, PopupManagementProps>(mapStateToProps, mapDispatchToProps)(PopupManagement);