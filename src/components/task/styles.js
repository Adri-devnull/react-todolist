import styled from 'styled-components';

const StyledTask = styled.div`
	width: 306px;
	color: #fff;
	background-color: #25273d;
	padding: 0px 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid grey;
	height: 45px;
`;

const StyledInput = styled.input`
	display: none;
`;

const StyledLabel = styled.label`
	position: relative;
	padding-left: 40px;
	cursor: pointer;

	&::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		width: 16px;
		height: 16px;
		border: 1px solid #fff;
		border-radius: 10px;
		background-color: ${({ $completed }) =>
			$completed ? '#a970f1' : 'transparent'};
		background-image: ${({ $completed }) =>
			$completed ? 'url("./public/assets/images/icon-check.svg")' : 'none'};
		background-size: 70%;
		background-repeat: no-repeat;
		background-position: center;
	}
`;

const StyledButtonDelete = styled.button`
	background-color: red;
	color: #fff;
	border: none;
	cursor: pointer;
	height: 19px;
	border-radius: 15px;
`;

export { StyledInput, StyledLabel, StyledTask, StyledButtonDelete };
