import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

export interface Book {
    id: string;
    title: string;
    author: string;
    category: string;
    condition: string;
    description: string;
    imageUrl: string;
    isBundle: boolean;
    price: number;
    sellerId: string;
    createdAt: string;
    updatedAt: string;
}


interface BookGridProps {
    book: Book;
    onBookPress?: (book: Book) => void;
}

export const BookGrid: React.FC<BookGridProps> = ({ book, onBookPress }) => {


    return (
        <TouchableOpacity
            style={styles.gridCard}
            onPress={() => onBookPress?.(book)}
            activeOpacity={0.7}
        >
            <Image source={{ uri: book.imageUrl }} style={styles.gridImage} />
            {book.isBundle && (
                <View style={styles.bundleBadge}>
                    <Text style={styles.bundgeText}>Bundle</Text>
                </View>
            )}
            <View style={styles.gridContent}>
                <Text style={styles.gridTitle} numberOfLines={2}>
                    {book.title}
                </Text>
                <Text style={styles.gridAuthor} numberOfLines={1}>
                    {book.author}
                </Text>
                <View style={styles.gridFooter}>
                    <Text style={styles.gridPrice}>${book.price.toFixed(2)}</Text>
                    <View style={styles.conditionBadge}>
                        <Text style={styles.conditionText}>{book.condition}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>

    );
};



const { width } = Dimensions.get('window');
const gridItemWidth = (width - 48) / 2;

const styles = StyleSheet.create({
    // Grid Styles
    gridContainer: {
        padding: 12,
    },
    gridCard: {
        width: gridItemWidth,
        backgroundColor: '#fff',
        borderRadius: 12,
        margin: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        overflow: 'hidden',
    },
    gridImage: {
        width: '100%',
        height: 180,
        resizeMode: 'cover',
    },
    bundleBadge: {
        position: 'absolute',
        top: 8,
        right: 8,
        backgroundColor: '#FF6B6B',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    bundgeText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: '700',
    },
    gridContent: {
        padding: 12,
    },
    gridTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: 4,
    },
    gridAuthor: {
        fontSize: 12,
        color: '#666',
        marginBottom: 8,
    },
    gridFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    gridPrice: {
        fontSize: 16,
        fontWeight: '800',
        color: '#4CAF50',
    },
    conditionBadge: {
        backgroundColor: '#E3F2FD',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
    },
    conditionText: {
        fontSize: 10,
        color: '#1976D2',
        fontWeight: '600',
    },

    // List Styles
    listContainer: {
        padding: 16,
    },
    listCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 16,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        overflow: 'hidden',
    },
    listImage: {
        width: 120,
        height: 160,
        resizeMode: 'cover',
    },
    listContent: {
        flex: 1,
        padding: 12,
        justifyContent: 'space-between',
    },
    listHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 4,
    },
    listTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#1a1a1a',
        flex: 1,
        marginRight: 8,
    },
    bundleBadgeSmall: {
        backgroundColor: '#FF6B6B',
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderRadius: 4,
    },
    bundgeTextSmall: {
        color: '#fff',
        fontSize: 9,
        fontWeight: '700',
    },
    listAuthor: {
        fontSize: 13,
        color: '#666',
        marginBottom: 6,
        fontStyle: 'italic',
    },
    listDescription: {
        fontSize: 12,
        color: '#888',
        lineHeight: 18,
        marginBottom: 8,
    },
    listFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listMetadata: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    categoryText: {
        fontSize: 11,
        color: '#999',
        fontWeight: '500',
    },
    separator: {
        marginHorizontal: 6,
        color: '#ddd',
    },
    conditionTextList: {
        fontSize: 11,
        color: '#1976D2',
        fontWeight: '600',
    },
    listPrice: {
        fontSize: 18,
        fontWeight: '800',
        color: '#4CAF50',
    },
});