import styled from "styled-components"

const Wrapper= styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
& .hr1{
    width: 40%;
    padding:20px;

    align-items: center;
}
`
export const Trending = ({trend}) => {

    return (
            <Wrapper >
                <div className="hr1" ><hr /></div>
                <div style={{fontSize: "30px",fontWeight: "bold"}}>
                    {trend}
                    </div>
                <div className="hr1"><hr /></div>
            </Wrapper>
            
        
    )
}