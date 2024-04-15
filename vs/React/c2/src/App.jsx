 import React from "react";
 import * as MainBox from './MainBox';

 function App() {
     const [signIn, toggle] = React.useState(true);
      return(
          <MainBox.Container>
              <MainBox.SignUpContainer signinIn={signIn}>
                  <MainBox.Form>
                      <MainBox.Title>Registration</MainBox.Title>
                      <MainBox.Input type='text' placeholder='What should we call you by?' />
                      <MainBox.Input type='email' placeholder='Email_Id' />
                      <MainBox.Input type='password' placeholder='Password' />
                      <MainBox.Button>JOIN</MainBox.Button>
                  </MainBox.Form>
              </MainBox.SignUpContainer>

              <MainBox.SignInContainer signinIn={signIn}>
                   <MainBox.Form>
                       <MainBox.Title>Sign in</MainBox.Title>
                       <MainBox.Input type='email' placeholder='Email_Id' />
                       <MainBox.Input type='password' placeholder='Password' />
                       <MainBox.Anchor href='#'>Forgot your password?</MainBox.Anchor>
                       <MainBox.Button>LOG IN</MainBox.Button>
                   </MainBox.Form>
              </MainBox.SignInContainer>

              <MainBox.OverlayContainer signinIn={signIn}>
                  <MainBox.Overlay signinIn={signIn}>

                  <MainBox.LeftOverlayPanel signinIn={signIn}>
                      <MainBox.Title>Welcome To Anime Verce!</MainBox.Title>
                      <MainBox.Paragraph>
                          It's Great To See You Again
                      </MainBox.Paragraph>
                      <MainBox.GhostButton onClick={() => toggle(true)}>
                          LOG IN
                      </MainBox.GhostButton>
                      </MainBox.LeftOverlayPanel>

                      <MainBox.RightOverlayPanel signinIn={signIn}>
                        <MainBox.Title>Not on Anime Verce yet?</MainBox.Title>
                        <MainBox.Paragraph>
                            Get Started
                        </MainBox.Paragraph>
                            <MainBox.GhostButton onClick={() => toggle(false)}>
                                Join Us!
                            </MainBox.GhostButton> 
                      </MainBox.RightOverlayPanel>
  
                  </MainBox.Overlay>
              </MainBox.OverlayContainer>

          </MainBox.Container>
      )
 }

 export default App;