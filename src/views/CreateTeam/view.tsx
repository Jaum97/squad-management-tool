import React from 'react'
import {
	AddTeamButton,
	TeamButtonText,
	SectionContainer,
	Content,
	SectionHeader,
	SectionTitle
} from '../MyTeams/styles'
import { useHistory } from 'react-router-dom'
import {
	Wrapper,
	RowContainer,
	ColumnContainer,
	InputContainer,
	InputTitle,
	Input,
	Textarea,
	RadioButtonsContainer,
	Spacer,
	TextAreaContainer,
	TagsContainer,
	Tag
} from './styles'
import RadioButton from '../../components/RadioButton'

// import IProps from './types'

function CreateTeam(props: any): JSX.Element {
	//props: IProps
	const { updateTeam, team } = props
	const history = useHistory()

	return (
		<Content>
			<AddTeamButton onClick={() => history.goBack()}>
				<TeamButtonText>{'<'}</TeamButtonText>
			</AddTeamButton>
			<Wrapper>
				<SectionContainer>
					<SectionHeader>
						<SectionTitle>{'Create your team'}</SectionTitle>
					</SectionHeader>

					<RowContainer>
						<ColumnContainer>
							<InputContainer>
								<InputTitle>{'Team name'}</InputTitle>
								<Input
									placeholder="Insert team name"
									onChange={updateTeam('name')}
									value={team.name}
								/>
							</InputContainer>
							<InputContainer>
								<InputTitle>{'Description'}</InputTitle>
								<Textarea rows={10} cols={10} maxLength={100} />
							</InputContainer>
						</ColumnContainer>
						<ColumnContainer>
							<InputContainer>
								<InputTitle>{'Team website'}</InputTitle>
								<Input
									placeholder="http://myteam.com"
									onChange={updateTeam('name')}
									value={team.name}
								/>
							</InputContainer>
							<InputContainer>
								<InputTitle>{'Team type'}</InputTitle>
								<RadioButtonsContainer>
									<RadioButton
										text="Real"
										onChange={updateTeam('type')}
										checked={team.type === 'real'}
									/>
									<Spacer />
									<RadioButton
										text="Fantasy"
										onChange={updateTeam('type')}
										checked={team.type === 'fantasy'}
									/>
								</RadioButtonsContainer>
							</InputContainer>

							<InputContainer>
								<InputTitle>{'Tags'}</InputTitle>
								<TextAreaContainer>
									<Textarea
										rows={5}
										cols={10}
										maxLength={100}
									/>
									<TagsContainer>
										{team.tags.map(
											(x: string, i: number) => (
												<Tag key={i}>{x}</Tag>
											)
										)}
									</TagsContainer>
								</TextAreaContainer>
							</InputContainer>
						</ColumnContainer>
					</RowContainer>
				</SectionContainer>
			</Wrapper>
		</Content>
	)
}

export default CreateTeam
