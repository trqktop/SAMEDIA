
export default function enableCardsAnimation(config) {
    const { cardsArray,
        cardImageSelector,
        src,
    } = { ...config }

    cardsArray.forEach(card => {
        const img = card.querySelector(cardImageSelector)
        img.src = src[img.id]
        enableListeners(config, card, img)
    })
}
function enableListeners(config, card, img) {
    const {
        cardIsHoverSelector,
        circleBgSelector,
        startAnimationSelector,
        srcIfHover,
        src,
    } = { ...config }

    card.addEventListener('mouseenter', e => {
        hoverHandler(img.id + '_', img, circleBgSelector, cardIsHoverSelector, card, startAnimationSelector, srcIfHover)
    })
    card.addEventListener('mouseleave', e => {
        mouseLeaveHandler(img.id, img, circleBgSelector, cardIsHoverSelector, card, startAnimationSelector, src)
    })
}


function hoverHandler(key, img, circleBgSelector, cardIsHoverSelector, card, startAnimationSelector, imagesSrcIsHover) {
    setTimeout(() => {
        img.src = imagesSrcIsHover[key]
        const hoverAnimation = card.querySelector(circleBgSelector)
        card.classList.toggle(cardIsHoverSelector)
        hoverAnimation.classList.toggle(startAnimationSelector)
    }, 300)
}
function mouseLeaveHandler(key, img, circleBgSelector, cardIsHoverSelector, card, startAnimationSelector, imagesSrc) {
    setTimeout(() => {
        img.src = imagesSrc[key]
        const hoverAnimation = card.querySelector(circleBgSelector)
        card.classList.remove(cardIsHoverSelector)
        hoverAnimation.classList.remove(startAnimationSelector)
    }, 300)
}
