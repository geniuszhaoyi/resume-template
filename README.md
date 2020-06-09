# Resume Template

A templates library lets you create beautiful resume without considering margin, font-family or size. 
<!-- See this [demo](https://codesandbox.io/s/resume-template-tyvgs) and try it yourself! -->

## Install

`npm i @geniuszhaoyi/resume-template`

## Get started

This library works with React 1.6 or more. If you haven't already, create a React app by run: 

```
npx create-react-app my-app
cd my-app
npm start
```

In generated files, find `App.js` in forder `/src`, replace it's content with below:

```
import React from "react";

import { 
    BasicResume, ColorfulResume, Name, Phone, Email, Address, Line1, Line2, City, State, ZipCode,
    StartDate, EndDate, Item, Experiences, Experience, Company, Title, Description, 
    Educations, Education, Institite, Degree, Major 
} from "@geniuszhaoyi/resume-template";

export default function App() {
  return <BasicResume>
    <Name>Genius Zhaoyi</Name>
    <Address>
      <Line1>1 Example Street</Line1>
      <Line2>APT 2</Line2>
      <City>New York</City>
      <State>NY</State>
      <ZipCode>10010</ZipCode>
    </Address>
    <Phone>1234567890</Phone>
    <Email enableLink={false}>genius.zhaoyi@gmail.com</Email>
    <Experiences>
      <Experience>
        <Company>Github</Company>
        <Title>Full Stack Developer</Title>
        <Address>1 Example Street, New York, United States</Address>
        <StartDate>04/2020</StartDate>
        <EndDate>Present</EndDate>
        <Description>
          <Item>Working on Resume Template Project</Item>
          <Item>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </Item>
          <Item>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Item>
          <Item>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Item>
          <Item>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.
          </Item>
        </Description>
      </Experience>
    </Experiences>
    <Educations>
      <Education>
        <Institite>Github Institite of Technology</Institite>
        <Degree>Master of Science</Degree>
        <Major>Computer Science</Major>
        <StartDate>2004</StartDate>
        <EndDate>2006</EndDate>
      </Education>
      <Education>
        <Institite>
          Github Institite of Technology
        </Institite>
        <Degree>Bachelor's degree</Degree>
        <Major>Computer Science</Major>
        <StartDate>2000</StartDate>
        <EndDate>2004</EndDate>
      </Education>
    </Educations>
  </BasicResume>
}
```

After save your edit, open a browser and go to `http://localhost:3000`. You will see your resume ready to be printed out!

## Contribute and raise Pull Request

All contribution and pull requests are welcome. 
