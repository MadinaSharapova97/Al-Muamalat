import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Language() {

    const { t, i18n } = useTranslation()

    const languagesData = [
        { id: 1, name: 'En' },
        { id: 2, name: 'Ru' },
    ]

    const changeLanguage = (value) => {

        i18n.changeLanguage(value)
    }

    return (
        <div>

        </div>
    )
}
