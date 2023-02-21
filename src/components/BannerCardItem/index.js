// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCards} = props
  const {headerText, description, className} = bannerCards

  return (
    <li className="user-card-container">
      <div className={className}>
        <h1 className="user-name"> {headerText} </h1>
        <p className="user-designation"> {description} </p>
        <button className="button" type="button">
          Show more
        </button>
      </div>
    </li>
  )
}
export default BannerCardItem
