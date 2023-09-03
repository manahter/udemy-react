import BannerImage from '../assets/banneryeni.jpg'
import '../styles/About.css'

const About = () => {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage: `url(${BannerImage})`}} ></div>
      <div className='aboutBottom'>
        <h1>Hakkımızda</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ad voluptas magni minus reiciendis saepe, quasi exercitationem, alias et unde dolore accusamus eligendi. Nemo soluta reiciendis, quas consectetur fuga tempora?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, atque ipsa quaerat non sapiente tempore? Accusantium, totam aut expedita quo ipsam quod impedit quae qui quam? Voluptatem ratione numquam alias?LLoreö
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis libero deleniti porro similique. Mollitia error molestiae aliquid suscipit quia temporibus ad eligendi, accusamus exercitationem est aspernatur similique perspiciatis, laborum officiis? 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eum facere, magnam nesciunt explicabo nostrum reprehenderit aperiam natus dicta? Fuga nulla atque quae ab, quas maxime dolorum deserunt voluptatem facilis.
        </p>
      </div>
    </div>
  )
}

export default About;