import styled from 'styled-components'

export const UserWrapper = styled.div`
  width:100%;
  height:100%;
  background:#f5f5f5;
`

export const UserTop = styled.div`
  width:320px;
  height:94px;
  background:#0085ff;
  position:relative;
`
export const UserTopHead = styled.div`
  width:52px;
  height:52px;
  background:pink;
  border-radius:50%;
  position:absolute;
  top:50%;
  margin-top:-25px;
  margin-left:13px;
`
export const UserTopName = styled.div`
  width:208px;
  height:100%;
  margin-left:78px;
  padding-top:30px;
  box-sizing:border-box;
  h5{
    color:#ffffff;
  }
  p{
    color:#ffffff;
    font-size:12px;
    margin-top:5px;
  }
`

export const UserTab = styled.div`
  width:320px;
  height:70px;
  display:flex;
  justify-content:center;
  background:#fff;
  div{
    height:70px;
    width:50%;
    border-right:1px solid #000;
    padding-top:8px;
    box-sizing:border-box;
    border:1px solid #ececec;
    border-top:none;
    i{
      font-size:20px;
      font-weight:bold;
      color:#ff5f3e;
      margin-left:64px;
      &.hyh{
        color:#6ac20b;
      }
    }
    span{
      font-size:12px;
      font-weight:bold;
      color:#ff5f3e;
      margin-left:0;
    }
    p{
      font-size:12px;
      font-weight:bold;
      color:#666;
      margin-left:63px;
    }

  }
`
export const UserListWrapper = styled.div`
  width:100%;
  margin-top:8px;
`

export const UserList = styled.a`
  display:block;
  width:100%;
  height:38px;
  background:#fff;
  border:1px solid #ececec;
  border-left:none;
  border-right:none;
  box-sizing:border-box;
  position:relative;
  i{
    position:absolute;
    top:10px;
    right:10px;
  }
  strong{
    margin-left:10px;
    margin-right:10px;
    line-height:38px;
    font-size:12px;
    &.lanse{
      color:#4aa5f0;
    }
    &.lvse{
      color:#94d94a;
    }
    &.chengse{
      color:#fc7b53;
    }
  }
  span{
    line-height:38px;
    font-size:14px;
    color:#7b7b7b;
  }
`
export const Yinsi = styled.div`
  width:100%;
  height:52px;
  p{
    text-align:center;
    line-height:52px;
    color:#4aa5f0;
    font-size:12px;
  }
`