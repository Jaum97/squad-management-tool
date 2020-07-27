import React from 'react'
import Avatar from 'react-avatar'
import { useHistory } from 'react-router-dom'
import Select from 'react-select'
import ReactTags from 'react-tag-autocomplete'

import RadioButton from '../../components/RadioButton'
import {
	AddTeamButton,
	Content,
	GradientSectionContainer,
	SectionContainer,
	SectionHeader,
	SectionTitle,
	TeamButtonText
} from '../MyTeams/styles'
import SquadFormation from './SquadFormation'
import {
	ColumnContainer,
	FormationSectionContainer,
	Input,
	InputContainer,
	InputTitle,
	PlaceholderContainer,
	PlayerPlaceholder,
	RadioButtonsContainer,
	RowContainer,
	SaveButton,
	Spacer,
	Tag,
	TagsContainer,
	TeamFormationContainer,
	Textarea,
	TextAreaContainer,
	Title,
	Wrapper,
	TypeContainer
} from './styles'
import InputTag from './TagInput'
import { IViewProps } from './types'

// import IProps from './types'

function CreateTeam(props: IViewProps): JSX.Element {
	const {
		formations,
		inputsWithError,
		team,
		addTag,
		removeTag,
		saveTeam,
		updateTeam
	} = props
	const history = useHistory()

	const { tags } = team

	const isInvalid = (x: string) => inputsWithError.includes(x)

	return (
		<Content>
			<AddTeamButton onClick={history.goBack}>
				<TeamButtonText>{'<'}</TeamButtonText>
			</AddTeamButton>
			<Wrapper>
				<SectionContainer>
					<SectionHeader>
						<SectionTitle>{'Create your team'}</SectionTitle>
					</SectionHeader>

					<Title>{'TEAM INFORMATION'}</Title>

					<RowContainer>
						<ColumnContainer>
							<InputContainer>
								<InputTitle invalid={isInvalid('name')}>
									{'Team name'}
								</InputTitle>
								<Input
									invalid={isInvalid('name')}
									placeholder="Insert team name"
									onChange={updateTeam('name')}
									value={team.name}
								/>
							</InputContainer>
							<InputContainer>
								<InputTitle>{'Description'}</InputTitle>
								<Textarea
									rows={12}
									cols={10}
									maxLength={100}
									onChange={updateTeam('description')}
									value={team.description}
								/>
							</InputContainer>
						</ColumnContainer>
						<ColumnContainer>
							<InputContainer>
								<InputTitle invalid={isInvalid('website')}>
									{'Team website'}
								</InputTitle>
								<Input
									invalid={isInvalid('website')}
									placeholder="http://myteam.com"
									onChange={updateTeam('website')}
									value={team.website}
								/>
							</InputContainer>
							<TypeContainer>
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
							</TypeContainer>

							<TagsContainer>
								<InputTitle>{'Tags'}</InputTitle>
								<InputTag
									tags={team.tags}
									addTag={addTag}
									removeTag={removeTag}
								/>
							</TagsContainer>
						</ColumnContainer>
					</RowContainer>

					<Title>{'CONFIGURE SQUAD'}</Title>

					<RowContainer>
						<ColumnContainer>
							<p>Formation</p>
							<Select options={formations} />
							<SquadFormation />
							<SaveButton onClick={saveTeam}>{'Save'}</SaveButton>
						</ColumnContainer>

						<ColumnContainer>
							<p>Search Players</p>
							<Select options={formations} />
						</ColumnContainer>
					</RowContainer>
				</SectionContainer>
			</Wrapper>
		</Content>
	)
}

export default CreateTeam
