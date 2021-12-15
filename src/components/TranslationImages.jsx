
  const TranslationImages = ({ translateText = [] }) => {
    const images = translateText.split('').map((char, index) => {
        return <img key={ index + char } src={ 'img/' + char + '.png' } alt={ char } />
      })
      
      return (
        <section>
          { images }
        </section>
      );
}

export default TranslationImages
