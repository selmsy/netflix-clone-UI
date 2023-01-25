import React from 'react'
import styles from './SocialLinks.module.css'
import FacebookIcon from './assets/facebook.svg'
import InstagramIcon from './assets/Instagram.svg'
import TwitterIcon from './assets/twitter.svg'
import YoutubeIcon from './assets/youtube.svg'

const SocialLinks = () => {
  return (
    <div className={styles.box}>
         <a href="facebook.com" className={styles.iconLink}>
                <FacebookIcon />
            </a>
            <a href="instagram.com" className={styles.iconLink}>
                <InstagramIcon />
            </a>
            <a href="twitter.com" className={styles.iconLink}>
                <TwitterIcon />
            </a>
            <a href="youtube.com" className={styles.iconLink}>
                <YoutubeIcon />
            </a>
        </div>
  )
}

export default SocialLinks