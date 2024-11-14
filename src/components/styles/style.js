import styled from "styled-components";

export const StyleForAllProject = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: 80px;
    color: #b83f45;
    font-weight: 200;
  }
  .inp {
    border: 1px solid #ffffff;
    display: flex;
    align-items: center;
    padding-left: 20px;
  }
  .fonavesom {
    background: url(https://img.icons8.com/?size=100&id=48464&format=png&color=000000) center no-repeat;
    background-size: 30px;
    height: 30px;
    width: 30px;
  }
  .input{
    margin-top: 20px;
    padding: 16px 16px 16px 60px;
    height: 65px;
    width: 515px;
    font-style: oblique;
    font-size: 24px;
    border: 1px solid #ffffff;
  }
`;

export const StylesforFooter = styled.div`
  padding-left: 20px;
  font-size: 15px;
  height: 50px;
  width: 550px;
  border: 0.4px solid #484848;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .container{
    display: flex;
    gap: 20px;
  }
  .button1{
    border: 1px solid red;
    padding: 5px;
  }
  .button2{
    border: none;
    padding: 5px;
  }
  .button3{
    border: none;
    padding: 5px;
    visibility: hidden;
  }
`;

export const Li = styled.li`
  height: 58.8px;
  width: 550px;
  font-size: 24px;
  font-weight: 400;
  color: "#00000";
  display: flex;
  border: 0.1px solid #484848;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px 0px 10px;
  .intut1{
    display: flex;
    gap: 20px;
    text-decoration: line-through;
  }
  .input2{
    display: flex;
    gap: 20px;
  }
  .crug{
    height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 0.4px solid #484848;
  }
  .crug1{
    height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 0.4px solid green;
  background: url(https://img.icons8.com/?size=100&id=115828&format=png&color=000000)
    center no-repeat;
  background-size: 20px;
  }
`;




