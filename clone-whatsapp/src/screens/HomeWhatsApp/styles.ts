import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({ //Exigencia do trabalho
  container: {
    flex: 1,
    backgroundColor: '#0b141a', 
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  headerText: {
    color: '#ffffff',
    fontSize: 23,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 20,
  },
  iconImage: {
    width: 24,
    height: 24,
    tintColor: '#ffffff',
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginVertical: 12,
  },
  searchInput: {
    backgroundColor: '#202c33',
    color: '#ffffff',
    borderRadius: 24,
    paddingHorizontal: 18,
    paddingVertical: 10,
    fontSize: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 8,
    marginBottom: 15,
  },
  filterBadgeActive: {
    backgroundColor: '#0c3e2e',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  filterTextActive: {
    color: '#25d366',
    fontWeight: '600',
    fontSize: 14,
  },
  filterBadge: {
    backgroundColor: '#202c33',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  filterText: {
    color: '#8696a0',
    fontSize: 14,
  },
  chatList: {
    flex: 1,
  },
  chatRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26, 
    marginRight: 14,
  },
  chatContent: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: '#202c33',
    paddingBottom: 12,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  chatName: {
    color: '#e9edef',
    fontSize: 16,
    fontWeight: '600',
  },
  chatTime: {
    color: '#8696a0',
    fontSize: 12,
  },
  chatMessage: {
    color: '#8696a0',
    fontSize: 14,
  },
});
