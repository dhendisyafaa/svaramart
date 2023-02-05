import React from 'react'
import styles from '../styles/SearchBar.module.css'

const SearchBar = () => {
    return (
        <div className={styles.searchbar}>
            <form action="#">
                <input className={styles.input} type="search" placeholder='Cari buku dari penulis favorit Anda' />
            </form>
        </div>
    )
}

export default SearchBar