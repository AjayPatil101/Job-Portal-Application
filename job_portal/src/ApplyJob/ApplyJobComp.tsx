import { Button, Divider, FileInput, LoadingOverlay, Notification, NumberInput, Textarea, TextInput } from "@mantine/core"
import { IconCheck, IconPaperclip } from "@tabler/icons-react"
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ApplyJobComp = () => {
    const [preview, setPreview] = useState(false);
    const [submit, setSubmit] = useState(false)
    const [sec, setSec] = useState(5)
    const navigate = useNavigate();

    const handlePreview = () => {
        setPreview(!preview);
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const handleaSubmit = () => {
        setSubmit(true);
        let x = 5;
        setInterval(() => {
            x--;
            setSec(x)
            if (x == 0) navigate('/find-jobs');

        }, 1000)
    }
    return (
        <>
            <LoadingOverlay className="!fixed"
                visible={submit}
                zIndex={1000}
                overlayProps={{ radius: 'sm', blur: 2 }}
                loaderProps={{ color: 'brightSun.4', type: 'bars' }}
            />

            <div className="w-2/3 mx-auto">
                <div className='flex justify-between'>
                    <div className='flex gap-2 items-center '>
                        <div className='p-3 bg-mine-shaft-800 rounded-xl' ><img className='h-14' src={`Icons/Google.png`} alt="Google" /></div>
                        <div>
                            <div className='font-semibold text-2xl'>Software Engineer III</div>
                            <div className='text-lg text-mine-shaft-300'>Google &bull; 3 days ago &#x2022; 48 Applicants</div>
                        </div>
                    </div>
                </div>
                <Divider my="xl" />
                <div className="text-xl font-semibold mb-5">Submit Your Application</div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-10 [&>*]:w-1/2">
                        <TextInput label="Full Name" readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`} withAsterisk placeholder="Enter Name" />
                        <TextInput label="Email" withAsterisk placeholder="Enter Email" readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`} />
                    </div>
                    <div className="flex gap-10 [&>*]:w-1/2">
                        <NumberInput label="Phone Number" readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`} min={0} clampBehavior="strict" max={9999999999} withAsterisk hideControls placeholder="Enter Phone Number" />
                        <TextInput label="Personl Website" readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`} withAsterisk placeholder="Enter Url" />
                    </div>
                    <FileInput
                        leftSection={<IconPaperclip stroke={1.5} />}
                        label="Attach your CV"
                        placeholder="Your CV"
                        leftSectionPointerEvents="none"
                        withAsterisk
                        readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
                    />
                    <Textarea placeholder="type something about yourself..." readOnly={preview} variant={preview ? "unstyled" : "default"} className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`} withAsterisk label="Cover Letter" autosize minRows={3} />
                    {!preview && <Button onClick={handlePreview} color="brightSun.4" variant="light">Preview</Button>}
                    {preview && <div className="flex gap-10 [&>*]:w-1/2">
                        <Button fullWidth onClick={handlePreview} color="brightSun.4" variant="outline">Edit</Button>
                        <Button fullWidth onClick={handleaSubmit} color="brightSun.4" variant="light">Submit</Button>
                    </div>
                    }

                </div>

            </div>
            <Notification icon={<IconCheck size={20} />}  withBorder className={`z-[1001] !border-bright-sun-400 !fixed top-0 left-[40%] transition duration-300 ease-in-out ${submit ? "translate-y-0" : "-translate-y-20"}`} color="teal" title="Application Submitted" mt="md" withCloseButton={false}>
                Redirection to find Jobs in {sec} second...
            </Notification>
        </>
    )
}

export default ApplyJobComp