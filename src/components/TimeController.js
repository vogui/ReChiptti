import React from 'react'
import { FormattedRelativeTime } from 'react-native-globalize'
import { getTimeController } from '../helpers/getTimeController'

export function TimeController({unixTime}){

    const {unit, value} = getTimeController(unixTime)

    return <FormattedRelativeTime
                unit={unit}
                value={-value}
            />
}