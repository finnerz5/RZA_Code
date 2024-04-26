import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import "../CSS_pages/All.css"

/* The `function Info()` is a functional component in a TypeScript React application. It is defining a
React component called `Info` that renders some information on a webpage. Inside the component, it
returns JSX elements that include a header titled "Information", a Google Maps iframe showing a
location, a section about the location, and a section about charity work. The component is using the
MDBRow and MDBCol components from "mdb-react-ui-kit" for layout and styling. */
function Info(){
    return(
        <>
            <div className="pt-5 Infoheader">
                <h1>Information</h1>
            </div>

            <div className="InfoBod">
            <MDBRow className='w-100'>
                <MDBCol lg='4' className='my-4'>
                    <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9489.568074398414!2d-2.43743138884367!3d53.515055330068336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ba9007a0dd925%3A0x22b9595cb947348a!2sRigetZooAdventures!5e0!3m2!1sen!2suk!4v1714119692994!5m2!1sen!2suk'
                    className=''
                    width="600"
                    height='400'
                    loading='lazy'
                    ></iframe>
                </MDBCol>
                <MDBCol lg='6' className='my-4 d-flex align-items-center'>
                    <div>
                    <h2>This is Where we are located</h2>
                    <p>
                        We arent located far from any place. We are just of "East Lanchashire road".
                    </p>
                    </div>
                </MDBCol>
                </MDBRow>

                <div className="Charity">
                    <h2 className="text-center ">Charity work</h2>
                    <p className="textC w-50">We contribute a large amount of the funds we make to <a href="https://support.wwf.org.uk/adopt-an-animal?pc=AVN014004&gclid=be4a5ce06852158b27053acb0e8eccb9&gclsrc=3p.ds&ds_rl=1263317&msclkid=be4a5ce06852158b27053acb0e8eccb9&utm_source=bing&utm_medium=cpc&utm_campaign=MK_WWF_Bing%20Paid_FR_AMD_BAUF_Brand%20Search_All_Brand%20Pure&utm_term=wwf&utm_content=WWF">WWF</a>
                       . We make sure all our animals are protected and are never harmed against. We assist other charities that stop poachers, as they are a leading cause in extinction.</p>
                </div>

            </div>

        </>
    )
}

export default Info;