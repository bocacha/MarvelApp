export default function Information({ image, name, description }) {
    return (
      <View style={styles.container}>
        <Image 
          style={styles.image}
          source={{uri: image}}
        />
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    )
  }