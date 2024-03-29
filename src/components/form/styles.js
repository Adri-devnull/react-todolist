import styled from 'styled-components';

const StyledCenteredForm = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-size: cover;
	padding: 40px;
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const StyledContainers = styled.div`
	width: 300px;
	color: #fff;
	background-color: #25273d;
	padding: 18px 13px;
	display: flex;
	align-items: center;
	gap: 20px;
	border-radius: 10px;
	box-shadow: 1px 5px 15px #171718;
`;

const StyledTitle = styled.h1`
	font-weight: bold;
	font-size: 2em;
	color: #fff;
	margin: 0;
`;

const StyledInput = styled.input`
	border: none;
	background-color: transparent;
	caret-color: white;
	color: #fff;
	&:focus {
		outline: none;
		border: none;
	}
`;

const StyledLabel = styled.label`
	display: inline-block;
	width: 18px;
	height: 18px;
	border: 1px solid #fff;
	cursor: pointer;
	border-radius: 10px;
	position: relative;
`;

export {
	StyledForm,
	StyledCenteredForm,
	StyledContainers,
	StyledInput,
	StyledLabel,
	StyledTitle
};
