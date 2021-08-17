//styles
import {Wrapper, Video, Image, ArrowImage} from "./style";
// overlay image
const s21Video = 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2Fsite.png?alt=media&token=07489628-121f-4741-a753-afa812c01da6';
//video
const video = 'https://firebasestorage.googleapis.com/v0/b/space-21-72f2b.appspot.com/o/images%2Fvideo%2Ffinal_610a3a0d97f23f01010f2c8e_286784%20(1).mp4?alt=media&token=c45f26c3-78a1-4f2d-b9aa-16e812193f3b'


const AboutUsHeader = () => {
    const allPageVariants = {
        in: {
            backgroundColor: '#000'
        },
        out: {
            backgroundColor: '#222'
        }
    };

    const pageVariants = {
        in: {
            opacity: 1,
            x: 0
        },
        out: {
            opacity: 0,
        }
    };

    const pageTransition = {duration: 1};

    return (
        <Wrapper initial="out" animate="in" exit="out" variants={allPageVariants}>
            <ArrowImage src={'https://www.somoswaka.com/wp-content/uploads/2017/10/WAKA-arrow-right2.png'}/>
            <Image src={s21Video}/>
            <Video muted autoPlay={true} loop={true} initial="out" animate="in" exit="out" variants={pageVariants}
                   transition={pageTransition}>
                <source data-src={video} type="video/mp4"
                        src={video}/>
            </Video>
        </Wrapper>
    )
}

export default AboutUsHeader;