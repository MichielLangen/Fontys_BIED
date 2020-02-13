import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MuiAlert from '@material-ui/lab/Alert';
import StorageIcon from '@material-ui/icons/Storage';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import FolderIcon from '@material-ui/icons/Folder';
import CloudIcon from '@material-ui/icons/Cloud';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import ErrorIcon from '@material-ui/icons/Error';
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import CircularProgress from '@material-ui/core/CircularProgress';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CheckIcon from '@material-ui/icons/Check';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar';
import AutorenewIcon from '@material-ui/icons/Autorenew';




function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    toolbar: theme.mixins.toolbar,
}));

const loadSteps = [<div style={{ display: 'flex', alignItems: 'center' }}>
    <CircularProgress size={32} />
    <h3 style={{ marginLeft: 10, color: "#424242" }}>Ophalen van de git repository</h3>
</div>,

<div style={{ display: 'flex', alignItems: 'center' }}>
    <CircularProgress size={32} />    <h3 style={{ marginLeft: 10, color: "#424242" }}>Configuratie bestanden controleren</h3>
</div>,

<div style={{ display: 'flex', alignItems: 'center' }}>
    <CircularProgress size={32} />    <h3 style={{ marginLeft: 10, color: "#424242" }}>Database schema validatie</h3>
</div>,

<div style={{ display: 'flex', alignItems: 'center' }}>
    <CircularProgress size={32} />    <h3 style={{ marginLeft: 10, color: "#424242" }}>Ophalen van branches</h3>
</div>,

<div style={{ display: 'flex', alignItems: 'center' }}>
    <CircularProgress size={32} />    <h3 style={{ marginLeft: 10, color: "#424242" }}>Scripts builden</h3>
</div>,

<div style={{ display: 'flex', alignItems: 'center' }}>
    <CircularProgress size={32} />    <h3 style={{ marginLeft: 10, color: "#424242" }}>Database schema toepassen</h3>
</div>,

<div style={{ display: 'flex', alignItems: 'center' }}>
    <CircularProgress size={32} />    <h3 style={{ marginLeft: 10, color: "#424242" }}>Scripts uitvoeren</h3>
</div>]

const readySteps = [<div style={{ display: 'flex', alignItems: 'center' }}>
    <CheckIcon style={{ fontSize: 32, color: "#4caf50" }} />
    <h3 style={{ marginLeft: 10, color: "#424242" }}>Ophalen van de git repository</h3>
</div>,

<div style={{ display: 'flex', alignItems: 'center' }}>
    <CheckIcon style={{ fontSize: 32, color: "#4caf50" }} />
    <h3 style={{ marginLeft: 10, color: "#424242" }}>Configuratie bestanden controleren</h3>
</div>,

<div style={{ display: 'flex', alignItems: 'center' }}>
    <CheckIcon style={{ fontSize: 32, color: "#4caf50" }} />
    <h3 style={{ marginLeft: 10, color: "#424242" }}>Database schema validatie</h3>
</div>,

<div style={{ display: 'flex', alignItems: 'center' }}>
    <CheckIcon style={{ fontSize: 32, color: "#4caf50" }} />
    <h3 style={{ marginLeft: 10, color: "#424242" }}>Ophalen van branches</h3>
</div>,

<div style={{ display: 'flex', alignItems: 'center' }}>
    <ErrorIcon style={{ fontSize: 32, color: "#f44336" }} />
    <h3 style={{ marginLeft: 10, color: "#424242" }}>Scripts builden</h3>
</div>,

<div style={{ display: 'flex', alignItems: 'center' }}>
    <FiberManualRecordIcon style={{ fontSize: 32, color: "#424242" }} />
    <h3 style={{ marginLeft: 10, color: "#424242" }}>Database schema toepassen</h3>
</div>,

<div style={{ display: 'flex', alignItems: 'center' }}>
    <FiberManualRecordIcon style={{ fontSize: 32, color: "#424242" }} />
    <h3 style={{ marginLeft: 10, color: "#424242" }}>Scripts uitvoeren</h3>
</div>]

export default function ClippedDrawer() {
    const classes = useStyles();
    const [loading, setLoading] = React.useState(true)
    const [repos, setRepos] = React.useState(["Web repository", "Location repository", "Intern database repository"]);
    const [dataloaders, setDataloaders] = React.useState(["Website scraper dataloader", "GPS Location dataloader", "Mobile dataloader", "Survey dataloader", "Database sync dataloader"]);
    const [currentStep, setCurrentStep] = React.useState(0);
    const [openRepo, setOpenRepo] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [openSnackbar, setOpenSnackbar] = React.useState(false);

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    const handleClickSnackbar = () => {
        setRepos([...repos, "Facebook repository"])
        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackbar(false);
    };

    let [currentScreen, setCurrentScreen] = React.useState(0);

    function changeCurrentScreen(screen) {
        setCurrentScreen(screen)
    }

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClickRepo = () => {
        setOpenRepo(!openRepo);
    };

    function getCurrentScreen() {
        switch (currentScreen) {
            case 0: {
                return <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <h1 style={{ color: "#424242" }}>My awesome data scientist project</h1>
                        <Button
                            onClick={handleClickOpen}
                            type="submit"
                            variant="contained"
                            color="primary">
                            Add Repository
                             </Button>
                    </div>
                    <h3 style={{ color: "#424242" }}>Er zijn problemen met de volgende dataloaders:</h3>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ErrorIcon style={{ fontSize: 32, color: "#f44336" }} /><h2 style={{ marginLeft: 15 }}>Mobile dataloader</h2>
                    </div>
                    <div style={{ marginLeft: 30, display: 'flex', alignItems: 'center' }}>
                        <FiberManualRecordIcon style={{ fontSize: 18 }} />
                        <h3 style={{ marginLeft: 10, color: "#424242" }}>Config.json ontbreekt</h3>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ErrorIcon style={{ fontSize: 32, color: "#f44336" }} /><h2 style={{ marginLeft: 15 }}>Survey dataloader</h2>
                    </div>
                    <div style={{ marginLeft: 30, display: 'flex', alignItems: 'center' }}>
                        <FiberManualRecordIcon style={{ fontSize: 18 }} />
                        <h3 style={{ marginLeft: 10, color: "#424242" }}>Dataloader.py bevat compilatie errors</h3>
                    </div>
                </main>
                break;
            };
            case 1: {
                setTimeout((e) => {
                    setCurrentStep(currentStep === 5 ? currentStep : currentStep + 1)
                }, Math.random()*6000 + 3000)

                // setTimeout((e) => {
                //     setCurrentStep(currentStep+1)
                // }, 6000)

                // setTimeout((e) => {
                //     setCurrentStep(currentStep+1)
                // }, 9000)

                // setTimeout((e) => {
                //     setCurrentStep(currentStep+1)
                // }, 12000)

                // setTimeout((e) => {
                //     setCurrentStep(currentStep+1)
                // }, 15000)

                return <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <h1 style={{ color: "#424242" }}>Facebook dataloader</h1>
                    {loadSteps.map((e, i) => {
                        if (i <= currentStep) {
                            if (i === currentStep && currentStep !== 5) {
                                return loadSteps[i]
                            } else if(i === 5) {
                                return
                            } else {
                                return readySteps[i]
                            }
                        }
                    })}
                </main>
                break;
            }
            case 2: {
                if (loading) {
                    setTimeout((e) => { setLoading(false); setDataloaders([...dataloaders, "Facebook dataloader"]) }, 4500)
                    return <main className={classes.content}>
                        <div className={classes.toolbar} />
                        <h1 style={{ color: "#424242" }}>Facebook repository</h1>


                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <CircularProgress size={32} />
                            <h3 style={{ marginLeft: 10, color: "#424242" }}>Identifying branches</h3>
                        </div>
                    </main>
                } else {
                    return <main className={classes.content}>
                        <div className={classes.toolbar} />
                        <h1 style={{ color: "#424242" }}>Facebook repository</h1>
                        <h2 style={{ color: "#424242", marginBottom: -5 }}>Dataloaders:</h2>



                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <CloudIcon color="primary" />
                            <h3 style={{ marginLeft: 10, color: "#424242" }}>Facebook dataloader</h3>
                        </div>
                    </main>
                }
                break;
            }
        }
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <ChevronLeft style={{ fontSize: 32 }} />
                    </IconButton>
                    <Typography variant="h6">My awesome data scientist project</Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.toolbar} />
                <List>
                    <ListItem button onClick={() => { changeCurrentScreen(0) }}>
                        <ListItemIcon><DashboardIcon color="primary" /></ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                    {/* <ListItem button>
                        <ListItemIcon><StorageIcon /></ListItemIcon>
                        <ListItemText primary="Databases" />
                    </ListItem> */}
                    <ListItem button onClick={handleClickRepo}>
                        <ListItemIcon><AccountTreeIcon color="primary" /></ListItemIcon>
                        <ListItemText primary="Repositories" />
                        {openRepo ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openRepo} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {repos.map((e) => {
                                console.log(e)
                                return <ListItem button className={classes.nested} onClick={() => changeCurrentScreen(2)}>
                                    <ListItemIcon>
                                        <FolderIcon style={{ color: "#ffc107" }} />
                                    </ListItemIcon>
                                    <ListItemText primary={e} />
                                </ListItem>
                            })}
                            {/* <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <FolderIcon style={{ color: "#ffc107" }} />
                                </ListItemIcon>
                                <ListItemText primary="Web repository" />
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <FolderIcon style={{ color: "#ffc107" }} />
                                </ListItemIcon>
                                <ListItemText primary="Location repository" />
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <FolderIcon style={{ color: "#ffc107" }} />
                                </ListItemIcon>
                                <ListItemText primary="Intern database repository" />
                            </ListItem> */}
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleClick}>
                        <ListItemIcon><CloudIcon color="primary" /></ListItemIcon>
                        <ListItemText primary="Dataloaders" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {dataloaders.map((e, i) => {
                                console.log(e)
                                if (i !== 2 && i !== 3) {
                                    return <ListItem button className={classes.nested} onClick={() => changeCurrentScreen(1)}>
                                        <ListItemIcon>
                                            <CloudDoneIcon style={{ color: "#03a9f4" }} />
                                        </ListItemIcon>
                                        <ListItemText primary={e} />
                                    </ListItem>
                                } else {
                                    return <ListItem button className={classes.nested} onClick={() => changeCurrentScreen(1)}>
                                        <ListItemIcon>
                                            <ErrorIcon color="error" />
                                        </ListItemIcon>
                                        <ListItemText primary="Mobile dataloader" />
                                    </ListItem>
                                }
                            })}
                        </List>
                    </Collapse>
                </List>
            </Drawer>

            {getCurrentScreen()}

            <Dialog fullWidth={500} open={openDialog} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add repository</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Fill in the git repository below
          </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Git repository"
                        type="email"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={() => { handleClose(); handleClickSnackbar() }} color="primary">
                        Add repository
          </Button>
                </DialogActions>
            </Dialog>

            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                color="primary"
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message="Repository succesfully added"
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbar}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            >
                <Alert onClose={handleCloseSnackbar} severity="success">
                    Repository succesfully added
        </Alert>
            </Snackbar>
        </div>
    );
}