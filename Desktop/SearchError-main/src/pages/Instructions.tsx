import Button from '@mui/material/Button';

export default function Instructions() {
    return (
        <div className="instruct">
            <h1>Instructions</h1>
            <div className="writing">
                <p>Thank you for doing this experiment! There are 200 images. For each trial, your goal is to click the target,
                    which is the letter T. There will also be a distractor, which is the letter L. Half of the images will
                    contain one target T. The other half of the images will be absent trials, meaning that they will not have
                    a target letter. If you find a target, click the T to move to the image. However, if you believe that there
                    is no T, click the space bar to report an absent trial.
                </p>
                <p>
                    Perform the task for each image as quickly and accurately as possible.
                </p>
            </div>
            <div className="startExp">
                <Button variant="contained">Start Experiment!</Button>
            </div>
        </div>
    );
}