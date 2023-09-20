import React from 'react'
import FAQItem from './FAQItem'

const DUMMY_QUESTIONS = [
    {
        id: 1,
        title: 'What is Netflix?',
        miniDesc: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
        fullDesc: 'You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. Theres always something new to discover and new TV shows and movies are added every week!',
    },
    {
        id: 2,
        title: 'How Much does Netflix Cost?',
        miniDesc: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR4.99 to EUR9.99 a month. No extra costs, no contracts.',
        fullDesc: '',
    },
    {
        id: 3,
        title: 'Where can i watch',
        miniDesc: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.',
        fullDesc: 'You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while youre on the go and without an internet connection. Take Netflix with you anywhere.',
    }, {
        id: 4,
        title: 'How do i cancel?',
        miniDesc: 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
        fullDesc: '',
    },
    {
        id: 5,
        title: 'What can i watch on Netflix?',
        miniDesc: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
        fullDesc: '',
    },
    {
        id: 6,
        title: 'Is Netflix good for kids?',
        miniDesc: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.',
        fullDesc: 'Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.',
    }
]


const FAQList = (props) => {

    return (
        DUMMY_QUESTIONS.map(questions => {
            return <FAQItem
                key={questions.id}
                id={questions.id}
                title={questions.title}
                miniDesc={questions.miniDesc}
                fullDesc={questions.fullDesc}
            ></FAQItem>
        })
    )
}

export default FAQList