import React from 'react'
import styles from '../styles/SearchBar.module.css'
import Link from 'next/link'

const SearchBar = (props) => {
    return (
        <Link href='/search'>
            <div className={styles.searchbar}>
                <form action="#">
                    <input className={styles.input} type="search" placeholder={props.placeholder} />
                </form>
            </div>
        </Link>
    )
}

export default SearchBar