
import { Button, TagsInput } from "@mantine/core";
import { content, fields } from "../Data/PostJob";
import Selectinput from "./Selectinput"
import TextEditor from "./TextEditor";

const PostJob = () => {
  const select = fields;
  return (
    <div className="w-4/5 mx-auto">
      <div className="text-2xl font-semibold">Post a Job</div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-10 [&>*]:w-1/2">
          <Selectinput {...select[0]} />
          <Selectinput {...select[1]} />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
          <Selectinput {...select[2]} />
          <Selectinput {...select[3]} />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
          <Selectinput {...select[4]} />
          <Selectinput {...select[5]} />
        </div>
        <TagsInput withAsterisk label="Skills" placeholder="Enter Skills" clearable acceptValueOnBlur splitChars={[',', ' ', '|']} />
        <div className="[&_button[data-active='true']]:!text-bright-sun-400 [&_button[data-active='true']]:bg-bright-sun-400/20">
          <div className="text-sm font-semibold">Job Description</div>
          <TextEditor />
        </div>
        <div className="flex gap-4">
          <Button  color="brightSun.4" variant="light">Publish Job</Button>
          <Button color="brightSun.4" variant="outline">Save as Draft</Button>
        </div>
      </div>
    </div>
  )
}

export default PostJob