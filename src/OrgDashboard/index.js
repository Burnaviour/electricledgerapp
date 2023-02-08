import { Link,useNavigate } from "react-router-dom";
// import { Button } from "react-bootstrap";
import red from "../images/red.svg"
import green from "../images/green.svg"
import blue from "../images/blue.svg"
import Clock from "../images/Clock.svg"
import hellopic from "../images/Hello.svg"
// import RUserDashboard from "./UserDashboard";
import { Background, 
  DivCenter, 
  HeadTiltle,
  HeadTiltle2, 
  Welcome,
  WelcomeText,
  LayoutImage,
  // LeftSection,
  LeftSectionRow1,
  ImageContainer,
  Image,
  // imageSource,
  Text,
  SubText,
  TextContainer,
  RightSection,
  Container1,
  Button1,
  // Row,
  Row1,
  // DataContainer,
  // DataContainer2,
  // DataLabel,
  // DataRow,
  Correction,
  // DataText,
  BottomRow1,
  Image2,
  LeftSection
} from "./adminElements";

export default function AdminDashboard() {
  const navigator = useNavigate();
  function handleClick(e) {
    if (e.target.id === "btn-1") {
      navigator("/set-prices");
    }
    if (e.target.id === "btn-2") {
      navigator("/query-bill");
    }
    if (e.target.id === "btn-3") {
      navigator("/add-user");
    }
    if (e.target.id === "btn-4") {
      navigator("/update-user-data");
    }
  }
  return (
    <>
     <Background>
      <DivCenter>
    
      <Welcome>
      <WelcomeText> 
          <HeadTiltle>Organisation Dashboard</HeadTiltle>
          <HeadTiltle2>Organization Controls</HeadTiltle2>
      </WelcomeText>
      <LayoutImage src={hellopic} />
      </Welcome> 

      <Container1>
        
        <Correction>Sub Text</Correction>

        {/* <Correction>Sub Text</Correction> */}
              <LeftSection>
              <LeftSectionRow1>
                <ImageContainer>
                  <Image src={red} />
                  <TextContainer>
                    <Text>Set prices</Text>
                    <SubText>Change Current Prices</SubText>
                  </TextContainer>
                </ImageContainer>

                <ImageContainer>
                  <Image2 src={Clock} />
                  <SubText>Current Month</SubText>
                  </ImageContainer>
                <Button1  
                  id="btn-1"
                  variant="success"
                  className="mx-4 my-4"
                  type="button"
                  onClick={handleClick}
                
                >Set Prices</Button1>
            
            
            
            
            
            
            
            
              </LeftSectionRow1>
          
              <LeftSectionRow1>
                <ImageContainer>
                  <Image src={green} />
                  <TextContainer>
                    <Text>Genrate Bill</Text>
                    <SubText>Current bill will be genrated.</SubText>
                  </TextContainer>
                </ImageContainer>
                
                <ImageContainer>
                  <Image2 src={Clock} />
                  <SubText>Current Month</SubText>
                  </ImageContainer>
                <Button1
                
                id="btn-2"
                variant="success"
                className="mx-4 my-4"
                type="button"
                onClick={handleClick}
                
                >Genrate Bill</Button1>
              </LeftSectionRow1>
          
              </LeftSection>

              <RightSection>

              <LeftSectionRow1>
                <ImageContainer>
                  <Image src={blue} />
                  <TextContainer>
                    <Text>Add User</Text>
                    <SubText>Add new User</SubText>
                  </TextContainer>
                </ImageContainer>

                
                <Button1
                 id="btn-3"
                 variant="success"
                 className="mx-4 my-4"
                 type="button"
                 onClick={handleClick}
                
                >Add User</Button1>
              </LeftSectionRow1>

              <LeftSectionRow1>
                <ImageContainer>
                  <Image src={green} />
                  <TextContainer>
                    <Text>Update User</Text>
                    <SubText>Adress will be updated</SubText>
                  </TextContainer>
                </ImageContainer>

                
                <Button1
                 id="btn-4"
                 variant="success"
                 className="mx-4 my-4"
                 type="button"
                 onClick={handleClick}
                
                >Update User</Button1>
              </LeftSectionRow1>
                
              </RightSection>
        </Container1>

        
        <Row1>
          <BottomRow1>
                  <Text>Do you know about us ? </Text>
                  <Link to="/"> 
                <Button1>Home</Button1>
                </Link>
              </BottomRow1>
          </Row1>

      </DivCenter>
      </Background>
      
    </>
  );
}
