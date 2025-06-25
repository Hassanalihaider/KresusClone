import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#01021d',
    paddingVertical: 20,
  },
  content: {
    padding: 16,
    paddingBottom: 80, 
  },
    header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1a1a2e',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    width: 35,
    height: 35,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#b58904',
  },
  profileName: {
    fontSize: 18,
    color: 'white',
    marginLeft: 10,
    fontWeight: '500',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    resizeMode: 'contain',
    width: 24,
    height: 24,
    tintColor: 'white',
  },
  
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#1a1a2e',
    backgroundColor: '#01021d',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerIcon: {
    width: 27,
    height: 27,
    marginBottom: 4,
    resizeMode: 'contain'
  },
  activeFooterIcon: {
    tintColor: '#b58904',
  },
  inactiveFooterIcon: {
    tintColor: '#666',
  },
  footerText: {
    fontSize: 12,
  },
  activeFooterText: {
    color: '#b58904',
  },
  inactiveFooterText: {
    color: '#666',
  },
  
  realCard: {
    marginBottom: 16,
    backgroundColor: '#101038',
    borderRadius: 16,
    padding: 16,
  },
  realContentRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  realAvatar: {
    backgroundColor: '#1d1ddf',
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  realLine: {
    backgroundColor: '#1d1ddf',
    height: 14,
    width: 120,
    marginBottom: 6,
    borderRadius: 8,
  },
  realLineHalf: {
    backgroundColor: '#1d1ddf',
    height: 14,
    width: 80,
    borderRadius: 8,
  },
  card: {
    backgroundColor: '#101038',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  headerLines: {
    marginBottom: 16,
  },
  shortLine: {
    width: '30%',
    height: 14,
    backgroundColor: '#1d1ddf',
    borderRadius: 8,
    marginBottom: 10,
  },
  mediumLine: {
    width: '70%',
    height: 14,
    backgroundColor: '#1d1ddf',
    borderRadius: 8,
    marginBottom: 10,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  squareIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#1d1ddf',
    borderRadius: 8,
  },
  rowCard: {
    flexDirection: 'row',
    backgroundColor: '#101038',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#1d1ddf',
    marginRight: 12,
  },
  textBlock: {
    flex: 1,
  },
  line: {
    height: 14,
    backgroundColor: '#1d1ddf',
    borderRadius: 8,
    marginBottom: 6,
    width: '80%',
  },
  lineHalf: {
    height: 14,
    backgroundColor: '#1d1ddf',
    borderRadius: 8,
    width: '60%',
  },
  button: {
    width: 50,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#1d1ddf',
  },
});