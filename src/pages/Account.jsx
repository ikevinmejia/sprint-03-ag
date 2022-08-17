import { Avatar, Button, Label, TextInput } from "flowbite-react";
import React from "react";
import ExitInfo from "../components/ExitInfo";
import { GiWeight } from "react-icons/gi";
import { HiMail, HiPhone } from "react-icons/hi";
import { FiAtSign } from "react-icons/fi";
import { CgArrowsShrinkV, CgCircleci } from "react-icons/cg";

const Account = () => {
  return (
    <div>
      <ExitInfo rute={-1} text={"Account"} estilos={"text-white"} />
      <Avatar
        img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        size="lg"
        rounded={true}
        status="online"
        statusPosition="top-right"
      />
      <div className="flex flex-wrap gap-2">
        <Button.Group outline={true}>
          <Button color="dark">
            <GiWeight className="w-4 h-4 mr-3" /> 28
          </Button>
          <Button color="dark">
            <CgArrowsShrinkV className="w-4 h-4 mr-3" /> 178
          </Button>
          <Button color="dark">
            <CgCircleci className="w-4 h-4 mr-3" /> 28
          </Button>
        </Button.Group>
      </div>
      <form className="flex flex-col gap-4">
        <div>
          <div className="block mb-2">
            <Label htmlFor="nickName" value="NickName" color="red" />
          </div>
          <TextInput
            id="nickName"
            placeholder="Bonnie Green"
            required={true}
            icon={FiAtSign}
          />
        </div>
        <div>
          <div className="block mb-2">
            <Label htmlFor="phone" value="Phone" />
          </div>
          <TextInput
            id="phone"
            type="number"
            placeholder="1234567"
            required={true}
            icon={HiPhone}
          />
        </div>
        <div>
          <div className="block mb-2">
            <Label htmlFor="email4" value="Your email" />
          </div>
          <TextInput
            id="email4"
            type="email"
            placeholder="name@flowbite.com"
            required={true}
            icon={HiMail}
          />
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Account;
