import '../style/Card.scss';
import grade from '../images/grade.png';

const Card = () => {
    return(
        <div className='MainCard'>
            <div className='PictureCard'></div>
            <div className='ContentCard'>
                <img className='GradeIcon' src={grade} alt="grade icon"/>
                <h4 className='TitleCard'>My Card</h4>
                <p className='TextCard'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget congue ex,
                    ac elementum eros. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </p>
            </div>
            <div className='LinksCard'>
                <p className='TextLinksCard'>Article written by : <span>Me</span>.</p>
                <p className='TextLinksCard'>Aug 11, 2022</p>
                <button className='ButtonCard'>More Details</button>
            </div>
        </div>
    )
}


export default Card;