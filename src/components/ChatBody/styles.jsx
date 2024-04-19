import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    background-color: #efeae2;
    overflow-y: auto;
    background:url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/047668fb-fcf5-4f67-8225-d13cc4435f67/de2f8se-3e418b9f-37f7-4a0b-9544-7f219e408591.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA0NzY2OGZiLWZjZjUtNGY2Ny04MjI1LWQxM2NjNDQzNWY2N1wvZGUyZjhzZS0zZTQxOGI5Zi0zN2Y3LTRhMGItOTU0NC03ZjIxOWU0MDg1OTEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UBF8aOOXFNvCMa8l5HLgGiGgpS830CiNVzziF2G6GDs') no-repeat center;
    background-size: cover;
    
    &::-webkit-scrollbar {
        width: 6px;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.2);
    }
    * {
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
`