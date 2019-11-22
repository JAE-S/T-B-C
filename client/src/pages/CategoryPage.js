// Import React
// =========================================================
    import React from "react"; 
// Import Material Ui Components
// =========================================================
    // import { Grid } from '@material-ui/core';
// Import Components
// =========================================================
    import Nav from "../components/Nav"
    import Wrapper from "../components/Wrapper"
    import HeaderContainer from "../components/HeaderContainer"

// Export Default Category Page Function
// =========================================================
    export default function Category() {

        return (
            <>
            <Nav/>
            <HeaderContainer> 
                <Wrapper align="center" style={{paddingTop: 80}}> 
                    
                <h3>This is the App Category page</h3>
                
                </Wrapper>
            </HeaderContainer>
            {/* <Footer/> */}
            </>
        )
    }
