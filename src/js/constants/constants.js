import pesticides from '../../images/categories/пестициды.svg'
import crops from '../../images/categories/культуры.svg'
import vermins from '../../images/categories/вредители.svg'
import composition from '../../images/categories/соединения.svg'
import '../../images/categories/circle.svg'
import pesticides_ from '../../images/categories/_hover/пестициды_.svg'
import crops_ from '../../images/categories/_hover/культуры_.svg'
import vermins_ from '../../images/categories/_hover/вредители_.svg'
import composition_ from '../../images/categories/_hover/соединения_.svg'


const imagesSrcIsHover = { pesticides_, crops_, vermins_, composition_ }
const imagesSrc = { pesticides, crops, vermins, composition }
const cards = Array.from(document.querySelectorAll('.card'))
const cardAnimationConfig = {
    cardsArray: cards,
    cardIsHoverSelector: 'card_hover',
    cardImageSelector: '.card__image',
    circleBgSelector: '.card__circles',
    startAnimationSelector: 'card__circles_play',
    srcIfHover: imagesSrcIsHover,
    src: imagesSrc
}
export { cardAnimationConfig }