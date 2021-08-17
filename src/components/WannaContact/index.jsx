// styles
import { AfterImage, ComparisonSection, BeforeText, AfterText} from "./style";

const WannaContact = () => {
    return (
        <>
            <ComparisonSection className="comparisonSection">
                <AfterImage className="comparisonImage afterImage">
                    <AfterText>
                        Wanna
                    </AfterText>
                    <BeforeText className={"afterImageImg"}>Contact?</BeforeText>
                </AfterImage>
            </ComparisonSection>
        </>
    )
}

export default WannaContact;

