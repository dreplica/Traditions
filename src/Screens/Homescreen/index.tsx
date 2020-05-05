import React, { Fragment } from 'react';
import ContextLayer from './context';
import Slide from '../../components/Slide';

// interface IProps{
//     data:objectData[]
//     // auth:{
//     // admin: string;
//     // token: string;
//     // }
//     auth: objectData;
//     getitems: (payload:objectData[]) => void;
//     url:string
// }

export default function Homepage() {

    return (
        <Fragment>
            <Slide />
            <ContextLayer />
        </Fragment>
    )
}

// const mapStateToProps = (authenticate :stateData ) => ({
//     auth: authenticate.data?.auth as objectData
// })

// export default connect(mapStateToProps, { getitems: getItem })(Initial)