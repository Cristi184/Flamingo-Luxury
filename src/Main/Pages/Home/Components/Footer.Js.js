import {
    StyledCardContainer,
    StyledFlexContainer,
    StyledFooterContainer,
    StyledFooterTitle,
    StyledForm,
    StyledModal,
    StyledResponsiveContainer,
    StyledSocialMediaContainer,
    StyledText,
    StyledTextField,
} from "./UI/Styled";
import isEmail from "validator/lib/isEmail";
import {useEffect, useRef, useState} from "react";
import isEmpty from "lodash/isEmpty";
import {
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Link,
    ListItemText,
    MenuItem,
} from "@mui/material";
import {Facebook, Instagram} from "@mui/icons-material";

const Footer = ({setRef, handleCloseForm, openForm, pathname}) => {
    const bottom = useRef(null);
    useEffect(() => {

        if (bottom.current) {
            setRef(bottom.current);
        }
    }, [bottom]);
    const [mail, setMail] = useState(null);
    const [agree, setAgree] = useState(false);
    const [error, setError] = useState(false);
    const [option, setOption] = useState([]);
    const [open, setOpen] = useState(false);


    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleAccept = () => {
        setOpen(false);
        setAgree(true);
    };

    // const onFinish = (values) => {
    //     console.log("Received values of form: ", values);
    // };
    const descriptionElementRef = useRef(null);

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };
    const hearOptions = ["Recomandări", "Social media", "Google", "Alte surse"];
    const handleChange = (event) => {
        const {
            target: {value},
        } = event;
        setOption(typeof value === "string" ? value.split(",") : value);
    };
    useEffect(() => {
        if (!isEmpty(mail)) {
            !isEmail(mail) ? setError(true) : setError(false);
        } else {
            setError(false);
        }
    }, [mail]);

    useEffect(() => {
        if (open) {
            const {current: descriptionElement} = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);
    const ContactForm = ({direction}) => <StyledForm
        component="form"
        sx={{
            "& .MuiTextField-root": {m: 1},
        }}
        autoComplete="off"
    >
        <StyledFooterTitle> Programează o întalnire!</StyledFooterTitle>
        <StyledResponsiveContainer direction={direction}>
            <StyledTextField
                fullWidth
                required
                id="nume"
                label="Nume"
                helperText=" "
            ></StyledTextField>
            <StyledTextField
                fullWidth
                required
                id="prenume"
                label="Prenume"
                helperText=" "
            ></StyledTextField>
        </StyledResponsiveContainer>
        <StyledResponsiveContainer direction={direction}>
            <StyledTextField
                fullWidth
                onChange={(e) => setMail(e.target.value)}
                required
                error={error}
                hasError={error}
                id="email"
                label="E-mail"
                type="email"
                helperText={
                    !error ? " " : "Intrduceți o adresă de e-mail validă "
                }
            ></StyledTextField>

            <StyledTextField
                fullWidth
                required
                id="telefon"
                label="Telefon"
                type="number"
                helperText=" "
            ></StyledTextField>
        </StyledResponsiveContainer>
        <StyledFlexContainer>
            <StyledTextField
                fullWidth
                required
                id="mesaj"
                label="Mesaj"
                rows={4}
                multiline
                helperText=" "
            ></StyledTextField>
        </StyledFlexContainer>
        <StyledTextField
            id="demo-multiple-checkbox"
            multiple
            required
            select
            value={option}
            onChange={handleChange}
            label="De unde ați auzit de noi?"
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
            helperText=" "
        >
            {hearOptions.map((optionChecked) => (
                <MenuItem key={optionChecked} value={optionChecked}>
                    <Checkbox checked={option.indexOf(optionChecked) > -1}/>
                    <ListItemText primary={optionChecked}/>
                </MenuItem>
            ))}
        </StyledTextField>

        <StyledFlexContainer direction="row">
            <Checkbox checked={agree} disabled/>
            <div>
                Am citit
                <Link underline="hover" onClick={handleOpen}>
                    {" "} termenii și condițiile.
                </Link>
            </div>
        </StyledFlexContainer>
        <Button
            sx={{
                ":hover": {
                    bgcolor: "#b8a87f",
                    color: "white",
                },
                "&.Mui-disabled": {
                    color: "white",
                    background: "#a3674a",
                },
            }}
            color="gold"
            disabled={!agree}
            fullWidth
            htmlType="submit"
            type="submit"
            variant="contained"
        >
            Trimite
        </Button>
    </StyledForm>
    return (
        <>
            <StyledFooterContainer ref={bottom}>
                <StyledCardContainer>
                    {pathname === "/" && <ContactForm/>}
                </StyledCardContainer>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    scroll="paper"
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                >
                    <DialogTitle id="scroll-dialog-title">
                        Termeni și condiții
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText
                            id="modal"
                            ref={descriptionElementRef}
                            tabIndex={-1}
                        >
                            {[...new Array(50)]
                                .map(
                                    () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
                                )
                                .join("\n")}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button color="gold" onClick={handleClose}>
                            Închide
                        </Button>
                        <Button color="gold" onClick={handleAccept}>
                            Sunt de acord
                        </Button>
                    </DialogActions>
                </Dialog>
            </StyledFooterContainer>
            <StyledSocialMediaContainer>
                <StyledFlexContainer>
                    <Button color="gold">
                        <Facebook/>
                    </Button>
                    <Button color="gold">
                        <Instagram/>
                    </Button>
                </StyledFlexContainer>
                <StyledFlexContainer>
                    <StyledText size="14px">© FIGRAN. ALL RIGHTS RESERVED.</StyledText>
                </StyledFlexContainer>
                <Button onClick={handleOpen}/>
                <StyledModal
                    open={openForm}
                    onClose={handleCloseForm}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <ContactForm/>
                </StyledModal>
            </StyledSocialMediaContainer>
        </>
    );
};

export default Footer;
