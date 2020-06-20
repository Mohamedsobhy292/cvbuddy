import React, { useContext, useState, useEffect } from 'react'

import styles from '../../../BuildResume.module.scss'
import { WorkHistoryItem } from './workHistoryItem'
import { Button } from 'shared/components/button'

const WorkHistory = () => {
    const [data, setData] = useState([])
    const [editMode, seteEditMode] = useState(false)

    const append = () => {
        setData([...data, { title: '', company: '', city: '' }])
        seteEditMode(data.length)
    }

    return (
        <>
            <h3 className={styles.title}> Work History</h3>
            {data &&
                data.map((item, index) => {
                    return (
                        <WorkHistoryItem
                            editMode={editMode}
                            key={item.id}
                            experience={item}
                            index={index}
                            fieldName={`experience[${index}]`}
                        />
                    )
                })}

            <Button onClick={append} variant="primary">
                Add Experience
            </Button>
        </>
    )
}

export { WorkHistory }
