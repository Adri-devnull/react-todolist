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
	padding: 15px 10px;
	display: flex;
	align-items: center;
	gap: 20px;
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

const StyledSpan = styled.span`
	font-size: 0.8em;
	cursor: pointer;
	color: #c8cbe7;
`;
export {
	StyledForm,
	StyledCenteredForm,
	StyledContainers,
	StyledInput,
	StyledLabel,
	StyledSpan
};
