import { Label, Dropdown, Button, makeStyles, Option, Input, Card, Textarea } from "@fluentui/react-components";
import React from "react";
const useStyles = makeStyles({
  root: {
    fontWeight: "bold",
    fontSize: "16px",
    marginLeft: "9px"
  },
  searchLabel: {
    fontWeight: "bold",
    fontSize: "16px",
  },
  CardLabel: {
    fontWeight: "bold",
    fontSize: "16px",
     marginLeft: "1px" 
  },
  btnstyle: {
    width: "30%",
    marginTop: "12px",
    background: "#024172",
    color: "white"
  }
})
const PitchMark: React.FC = () => {
  const style = useStyles()
  return (
    <div className="pitchmarkMainDiv">
      <div >

        <Label className={style.root}>Addressee + document type:
        </Label>
        <div className="document_div" style={{ display: "flex" }}>
          <Dropdown
            className="document_dropdown"
            clearable
            placeholder="Document"
          >
            <Option>option1</Option>
            <Option>option2</Option>
            <Option>option3</Option>
          </Dropdown>
          <Button appearance="primary" className={style.btnstyle}>Select</Button>

        </div>

      </div>
      <div style={{ marginTop: "12px" }}>

        <Label className={style.root}>Select Products / Services:
        </Label>
        <div className="product_div" style={{ display: "flex" }}>
          <Dropdown
            className="product_dropdown"
            clearable
            multiselect={true}
            placeholder="Select product"
          >
            <Option>option1</Option>
            <Option>option2</Option>
            <Option>option3</Option>
          </Dropdown>
          <Button appearance="primary" className={style.btnstyle}>Insert</Button>

        </div>

      </div>

      <div style={{ marginTop: "12px" }} >

        <Label className={style.root}>Select IP Portfolio:
        </Label>
        <div className="IPPortfolio_div" style={{ display: "flex" }}>
          <Dropdown
            className="IPPortfolio_dropdown"
            clearable
            multiselect={true}
            placeholder="IP Portfolio"
          >
            <Option>option1</Option>
            <Option>option2</Option>
            <Option>option3</Option>
          </Dropdown>
          <Button appearance="primary" className={style.btnstyle}>Insert</Button>

        </div>

      </div>

      <div style={{ marginTop: "12px" }} >


        <div className="PichmarkSearch_div" style={{ display: "flex" }}>
          <Label className={style.searchLabel}>Search:
          </Label>
          <Input placeholder="Content" />
        </div>

      </div>


      <div style={{ marginTop: "12px",marginLeft: "3px" }} >

        <Label className={style.CardLabel}>Select: </Label>

        <div className="preview_card">


          <Card>
            <Label>
              Templates: 3
            </Label>
            <Label>
              Headings: 2
            </Label>
            <Label>
              Content items: 5
            </Label>

          </Card>
        </div>
        <div style={{ marginTop: "8px" }}>
          <Textarea className="pitchMarkTextArea" placeholder="preview"/>
        </div>


      </div>
    </div>
  );
};

export default PitchMark;