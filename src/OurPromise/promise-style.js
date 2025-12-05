import styled from "styled-components";

export const PromiseStyle = styled.div`
  width: 100%;
  padding: 70px 80px;

  .title {
    text-align: center;
    font-size: 48px;
    font-weight: 900;
  }

  .subtitle {
    text-align: center;
    margin-top: 8px;
    font-size: 18px;
    color: #555;
  }

  .grid {
    margin-top: 60px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

  .card {
    padding-top: 20px;
    border-top: 5px solid;
    padding: 20px 10px;
  }

  .icon {
    font-size: 40px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 22px;
    color: #444;
    margin-bottom: 12px;
  }

  p {
    font-size: 16px;
    color: #666;
    line-height: 1.5;
  }

  /* Colors */
  .teal { border-color: #28b8b0; }
  .yellow { border-color: #f0c040; }
  .blue { border-color: #29a5e1; }
  .purple { border-color: #9d63e9; }
  .red { border-color: #e14141; }
  .green { border-color: #4cc26b; }
`;
