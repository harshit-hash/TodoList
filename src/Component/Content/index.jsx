import React from 'react'
import './style.css'

function Content({ list, deleteData }) {
    return (
        <div>
            <div className='content'>

                {
                   (list===null)?'': list.map((data, index) => {
                    return <label key={index} htmlFor="">
                        <h5>{data}</h5>
                        <div className=''>
                            <button className='btndlt' onClick={() => deleteData(index)}>Delete</button>
                        </div>
                    </label>
                })
                }
            </div>
        </div>
    )
}

export default Content