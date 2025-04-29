import '../styles/SkillsSection.css'

export default function Skills( {id, skills, skillCategory, skillContent, setSkills} ) {
  const changeCategory = (newCategory) => {
    const deepCopy = [...skills];
    for (let dictionary of deepCopy) {
      if (dictionary.id === id) {
        deepCopy[skillCategory] = newCategory;
      } 
    }
    setSkills(deepCopy);
  }
  const changeContent = (newContent) => {
    const deepCopy = [...skills]
    for (let dictionary of deepCopy) {
      if (dictionary.id === id) {
        deepCopy[skillContent] = newContent;
      } 
    }
    setSkills(deepCopy);
  }
  return (
    <form className='input-data'>
      <label className='skill-category'>Skill Category</label>
        <input 
          type="text" 
          value={skillCategory}
          onChange={(e) => changeCategory(e.target.value)}
        />
      <label className='skill-category'>Skills</label>
        <input 
          type="text" 
          value={skillContent}
          onChange={(e) => changeContent(e.target.value)}
        />
    </form>
  )
}