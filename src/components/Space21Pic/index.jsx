
// styles
import {Wrapper, Container} from "./style";

const space21 = 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2Fs21m-min.jpg?alt=media&token=254a4d90-5d43-4fa5-8295-09ee575df034'

const TeamPhoto = () => {
    return (
        <>
            <Wrapper>
                <Container src={space21} alt="space21"/>
            </Wrapper>
        </>
    )
}

export default TeamPhoto;