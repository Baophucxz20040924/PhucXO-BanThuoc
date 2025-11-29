import React from 'react'
import { Helmet } from 'react-helmet'

const MetaData = ({ title }) => {
    return (
        <Helmet>
            <title>{`${title} - 22CNTTC`}</title>
        </Helmet>
    )
}

export default MetaData
