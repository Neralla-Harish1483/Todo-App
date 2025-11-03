import { Dialog, DialogActions, DialogTitle } from "@mui/material";
import { Fragment } from "react";

export default function TodoDetails({todoDetails,openDialog,setopenDialog,settodoDetails}){


    return <Fragment>
        <Dialog open={openDialog} onClose={()=>setopenDialog(false)}>
            <DialogTitle>{todoDetails?.todo}</DialogTitle>
            <DialogActions>
                <button onClick={()=>{setopenDialog(false) ; settodoDetails(null)}}>Close</button>
            </DialogActions>
        </Dialog>
    </Fragment>

}